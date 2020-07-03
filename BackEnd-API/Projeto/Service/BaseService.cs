using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Projeto.DAO;
using Projeto.Model;
using Projeto.VO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto.Service
{
    public abstract class BaseService<Entity, VO, Tcontext, AutoMapProfile, DAO>
        where Entity: BaseEntity, new()
        where VO: BaseVO, new()
        where Tcontext: DbContext, new()
        where AutoMapProfile: Profile, new()
        where DAO: BaseDAO<Entity, VO, Tcontext, AutoMapProfile>, new()
    {

        DAO dao = new DAO();

        public virtual VO Save(VO vo)
        {
            try
            {
                dao.Save(vo); 

                return vo;
            }
            catch
            {
                throw new System.ArgumentException("Estudar...", "estudar...");
            }
        }

        public virtual bool Update(VO vo)
        {
            try
            {
                return dao.Update(vo);
            }
            catch
            {
                throw new System.ArgumentException("Estudar...", "estudar...");
            }
        }

        public virtual List<VO> GetAll(int pageNumber, int pageSize, VO filter = null)
        {
            try
            {
                return dao.Select(pageNumber, pageSize, filter);
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public virtual VO GetOne(int id = 0)
        {
            try
            {
                return dao.SelectOne(id);
            }
            catch
            {
                throw new System.ArgumentException("Estudar...", "estudar...");
            }
        }

        public virtual bool Delete(int id)
        {
            try
            {
                return dao.Delete(id);
            }
            catch
            {
                throw new System.ArgumentException("Estudar...", "estudar...");
            }
        }

    }
}
