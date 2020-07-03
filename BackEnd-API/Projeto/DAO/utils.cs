using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Projeto.Model;

namespace Projeto.DAO{
    public static class utils 
    {
        public static IQueryable<T> LoadRelated<T>(this IQueryable<T> originalQuery) where T : BaseEntity, new()
        {
            Func<IQueryable<T>, IQueryable<T>> includeFunc = f => f;
            foreach (var prop in typeof(T).GetProperties()
                .Where(p => Attribute.IsDefined(p, typeof(IncludeAttribute))))
            {
                Func<IQueryable<T>, IQueryable<T>> chainedIncludeFunc = f => f.Include(prop.Name);
                includeFunc = Compose(includeFunc, chainedIncludeFunc);
            }
            
            return includeFunc(originalQuery);
        }
        
        private static Func<T, T> Compose<T>(Func<T, T> innerFunc, Func<T, T> outerFunc)
        {
            return arg => outerFunc(innerFunc(arg));
        }

    }
}
