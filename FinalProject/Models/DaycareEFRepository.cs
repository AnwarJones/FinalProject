using FinalProject.DCSite.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Models
{
    class DaycareEFRepository : IDaycareEFRepository
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public IList<DaycareCenter> ListCenters() {
            return _db.Centers.ToList();
        }
        public DaycareCenter FindCenter(int id) {
            return _db.Centers.Find(id);
        }

        public void Insert(DaycareCenter center) {
            _db.Centers.Add(center);
            _db.SaveChanges();
        }
        public void Edit(DaycareCenter center) {
            var original = this.FindCenter(center.Id);
            original.CenterName = center.CenterName;
            original.CenterAddress.StreetAddress = center.CenterAddress.StreetAddress;
            original.CenterAddress.City = center.CenterAddress.City;
            original.CenterAddress.State = center.CenterAddress.State;
            original.CenterAddress.ZipCode = center.CenterAddress.ZipCode;
            original.TelephoneNumber = center.TelephoneNumber;
            original.ContactPerson = center.ContactPerson;
            original.Email = center.Email;
            original.Website = center.Website;
            original.TotalCapacity = center.TotalCapacity;
            original.NumberOfOpenings = center.NumberOfOpenings;
            original.WaitingListSize = center.WaitingListSize;
            original.WaitingListOpenings = center.WaitingListOpenings;
            original.ReligiousAffiliation = center.ReligiousAffiliation;
            _db.SaveChanges();
        }
        public void Delete(int id) {
            var original = this.FindCenter(id);
            _db.Centers.Remove(original);
            _db.SaveChanges();
        }
    }
}
