using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelNet.Service.Models
{
    public class Payment
    {
        public int ID { get; set; }
        public decimal Amount { get; set; }
        public decimal RemainingAmount { get; set; }
        public bool IsDone { get; set; }
        public DateTime PaymentDay { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
