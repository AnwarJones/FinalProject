using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DCSite.Classes
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Source { get; set; }
        public DateTime PostingDate { get; set; }

        public string FormattedPostingDate
        {
            get { return this.PostingDate.ToShortDateString(); }
        }

        public string ArticleContent { get; set; }
    }
}
