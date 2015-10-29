using System.Collections.Generic;
using FinalProject.DCSite.Classes;

namespace FinalProject.Models
{
    interface IDaycareEFRepository
    {
        void Delete(int id);
        void Edit(DaycareCenter center);
        DaycareCenter FindCenter(int id);
        void Insert(DaycareCenter center);
        IList<DaycareCenter> ListCenters();
    }
}