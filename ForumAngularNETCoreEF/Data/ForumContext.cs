using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ForumEF;

namespace ForumAngularNETCoreEF.Models
{
    public class ForumContext : DbContext
    {
        public ForumContext (DbContextOptions<ForumContext> options)
            : base(options)
        {
        }

        public DbSet<ForumEF.User> User { get; set; }

        public DbSet<ForumEF.Thread> Thread { get; set; }

        public DbSet<ForumEF.Post> Post { get; set; }

        public DbSet<ForumEF.Comment> Comment { get; set; }
    }
}
