import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://car-doctor-server-delta-indol.vercel.app/bookings?email=${user?.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // }, [user.email]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBookings(res.data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = confirm("You sure?");
    if (proceed) {
      fetch(`https://car-doctor-server-delta-indol.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("deleted");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://car-doctor-server-delta-indol.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("updated");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <h1>booking</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
