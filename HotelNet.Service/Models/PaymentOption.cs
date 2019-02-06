using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HotelNet.Service.Models
{
    public class PaymentOption
    {
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Ratio { get; set; }

        [Required]
        public int Index { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
