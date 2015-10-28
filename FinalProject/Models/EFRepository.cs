using FinalProject.DCSite.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Models
{
    class EFRepository : IEFRepository
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<BlogPost> ListBlogPosts() {
            return _db.Blogs.ToList();
        }

        public BlogPost FindBlog(int id) {
            return _db.Blogs.Find(id);
        }
        public void Insert(BlogPost blogPost) {
            _db.Blogs.Add(blogPost);
            _db.SaveChanges();
        }
        public void Edit(BlogPost blogPost) {
            var original = this.FindBlog(blogPost.Id);
            original.Title = blogPost.Title;
            original.Source = blogPost.Source;
            original.PostingDate = blogPost.PostingDate;
            original.ArticleContent = blogPost.ArticleContent;
            _db.SaveChanges();
        }
        public void Delete(int id) {
            var original = this.FindBlog(id);
            _db.Blogs.Remove(original);
            _db.SaveChanges();
        }

    }
}
