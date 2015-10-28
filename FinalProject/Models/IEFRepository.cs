using System.Collections.Generic;
using FinalProject.DCSite.Classes;

namespace FinalProject.Models
{
    interface IEFRepository
    {
        void Delete(int id);
        void Edit(BlogPost blogPost);
        BlogPost FindBlog(int id);
        void Insert(BlogPost blogPost);
        IList<BlogPost> ListBlogPosts();
    }
}