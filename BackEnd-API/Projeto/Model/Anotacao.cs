﻿
using System.ComponentModel.DataAnnotations.Schema;
using Projeto.DAO;

namespace Projeto.Model
{
    [Table("anotacao")]
    public class Anotacao : BaseEntity
    {
        [Column(name: "Obs")]
        public string Obs { set; get; }

        [Column(name: "Data")]
        public System.DateTime Data { set; get; }

        [Column(name: "Id_pessoa_grupo")]
        public int Id_pessoa_grupo { set; get; }

        [ForeignKey("Id_pessoa_grupo")]
        [IncludeAttribute]
        public PessoaGrupo PessoaGrupo { set; get; }


    }
}
