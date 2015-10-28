using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DCSite.Classes
{
    public class DaycareCenter
    {
        public int Id { get; set; }
        [Required (ErrorMessage ="Center Name is required")]
        public string CenterName { get; set; }
        public Address CenterAddress { get; set; }
        [Required(ErrorMessage = "Telephone is required")]
        public string TelephoneNumber { get; set; }
        public string Email { get; set; }
        [Required(ErrorMessage = "Contact Person is required")]
        public string ContactPerson { get; set; }
        public string Website { get; set; }
        public int TotalCapacity { get; set; }
        public int NumberOfOpenings { get; set; } 
        public int WaitingListSize { get; set; }
        public bool WaitingListOpenings { get; set; }
        public bool ReligiousAffiliation { get; set; }
    }
}
