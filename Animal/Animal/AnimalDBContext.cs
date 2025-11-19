using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demos
{
    public class AnimalDBContext : DbContext
    {
        public DbSet<Animal> Animals { get; set; }
        public DbSet<Dog> Dogs { get; set; }
        public DbSet<Cat> Cats { get; set; }
    }
    protected void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("YourConnectionStringHere");
    }

