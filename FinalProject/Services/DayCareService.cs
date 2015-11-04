using CoderCamps;
using FinalProject.DCSite.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Services
{
    class DayCareService : IDayCareService
    {
        private IGenericRepository _repo;

        public DayCareService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public IList<DaycareCenter> ListCenters()
        {
            return _repo.Query<DaycareCenter>().ToList();
        }

        public IList<DaycareCenter> FilterCenters(DaycareCenter.BizTypes type)
        {
            return _repo.Query<DaycareCenter>().Where(c=>c.CenterType == type).ToList();
        }


        public void AddCenter(DaycareCenter center)
        {
            _repo.Add(center);
            _repo.SaveChanges();
        }
        public void EditCenter (DaycareCenter center)
        {
            var original = _repo.Find<DaycareCenter>(center.Id);
            original.CenterName = center.CenterName;
            original.CenterAddress.StreetAddress = center.CenterAddress.StreetAddress;
            original.CenterAddress.City = center.CenterAddress.City;
            original.CenterAddress.State = center.CenterAddress.State;
            original.CenterAddress.ZipCode = center.CenterAddress.ZipCode;
            original.TelephoneNumber = center.TelephoneNumber;
            original.Email = center.Email;
            original.ContactPerson = center.ContactPerson;
            original.Website = center.Website;
            original.TotalCapacity = center.TotalCapacity;
            original.NumberOfOpenings = center.NumberOfOpenings;
            original.WaitingListSize = center.WaitingListSize;
            original.WaitingListOpenings = center.WaitingListOpenings;
            original.ReligiousAffiliation = center.ReligiousAffiliation;
            _repo.SaveChanges();
        }
        public void DeleteCenter(int id)
        {
            _repo.Delete<DaycareCenter>(id);
            _repo.SaveChanges();
        }
        public DaycareCenter GetCenter(int id)
        {
            return _repo.Find<DaycareCenter>(id);
        }
    }
}

