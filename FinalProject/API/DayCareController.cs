using FinalProject.DCSite.Classes;
using FinalProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FinalProject.API
{
    public class DayCareController : ApiController
    {

    }

    public class BlogPostController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IEnumerable<BlogPost> Get()
        {
            return (from b in _db.Blogs select b).ToList();
        }
    }
    
     
}
