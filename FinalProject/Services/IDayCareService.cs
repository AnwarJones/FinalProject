using System.Collections.Generic;
using FinalProject.DCSite.Classes;

namespace FinalProject.Services
{
    public interface IDayCareService
    {
        void AddCenter(DaycareCenter center);
        void DeleteCenter(int id);
        void EditCenter(DaycareCenter center);
        DaycareCenter GetCenter(int id);
        IList<DaycareCenter> ListCenters();
    }
}