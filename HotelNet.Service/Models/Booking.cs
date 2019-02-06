using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HotelNet.Service.Models
{
    public class Booking
    {
        public int ID { get; set; }

        public int RoomTypeID { get; set; }

        [Required]
        [StringLength(100)]
        public string BookingName { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime StartOn { get; set; }

        [Required]
        public int Duration { get; set; }

        [Required]
        public double Payment { get; set; }

        [Required]
        public double RemainingAmount { get; set; }

        [Required]
        public int Capacity { get; set; }
        public bool IsActive { get; set; }

        [Display(Name = "Created at")]
        public DateTime CreatedAt { get; set; }

        [ForeignKey("RoomTypeID")]
        public virtual RoomType RoomType { get; set; }
    }
}
