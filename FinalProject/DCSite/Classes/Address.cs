using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.DCSite.Classes
{
    public class Address
    {
        [Required(ErrorMessage = "Street Address is required")]
        public string StreetAddress { get; set; }
        [Required(ErrorMessage = "City is required")]
        public string City { get; set; }
        [Required(ErrorMessage = "State is required")]
        public string State { get; set; }
        [Required(ErrorMessage = "Zip Code is required")]
        public string ZipCode { get; set; }
        //public string FormattedAddress = AddressChange();
        private string formattedAddress;

        public string FormattedAddress
        {
            get {

                return StreetAddress.Replace(' ', '+') + '+' + City + '+' + State + '+' + ZipCode;
            }
             
        }
        //public string AddressChange()
        //{
        //    return 
        //}









    }
}
