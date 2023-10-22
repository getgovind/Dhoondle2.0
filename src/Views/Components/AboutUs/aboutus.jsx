import React from "react";
import "./aboutUs.css"; // Import your CSS file for styling

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <header>
        <h1 className="about-us-title">About Us</h1>
      </header>
      <main>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to our website. We are a team of passionate individuals
            dedicated to making a difference. Our journey began with a shared
            vision of creating innovative solutions that improve people's lives.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            This application is a comprehensive platform that caters to the
            housing and home service needs of users. It's designed to simplify
            the process of finding and booking various types of accommodations,
            including rooms in hostels, PG (paying guest) accommodations, and
            flats. Additionally, it offers an array of essential services such
            as electricians, plumbers, AC repair technicians, painters,
            carpenters, and more. <br />
            <h4 style={{ marginTop: "1rem" }}>
              Accommodation Search and Booking:
            </h4>
            <br />
            <strong>Hostel Rooms:</strong> For individuals, especially students
            and travelers, seeking affordable temporary housing, the app
            provides a directory of hostels with detailed information about room
            availability, pricing, and amenities. Users can browse and book
            rooms seamlessly. <br />
            <strong>PG Accommodations:</strong> The application offers a
            database of PG accommodations, which are popular choices for those
            looking for a balance of comfort and affordability. Users can filter
            their preferences based on location, budget, and facilities. <br />
            <strong>Flats and Apartments:</strong> The app also serves those in
            search of long-term housing solutions like flats and apartments. It
            lists available properties with descriptions, photos, and contact
            information for landlords or property managers.
            <br />
            <strong>Home Services:</strong>
            <strong>Electrician:</strong> Users can request electrical services,
            such as wiring, fixture installations, or repairs. The app connects
            them with qualified electricians in their area. <br />
            <strong>Plumber:</strong> For plumbing needs, the app provides
            access to licensed plumbers who can fix leaks, install fixtures, or
            carry out other plumbing-related tasks. <br />
            <strong>AC Repair:</strong> In case of air conditioning issues,
            users can easily find and book technicians who can service, repair,
            or install air conditioning units. <br />
            Painter: Whether it's a home renovation or a fresh coat of paint for
            a room, the app offers a selection of professional painters to
            choose from. <br />
            <strong>Carpenter:</strong> Users can hire skilled carpenters for
            furniture assembly, repair, or custom carpentry projects. <br />
            <h4 style={{ marginTop: "1rem" }}>Key Features:</h4>
            <strong>Search and Filters:</strong> The application provides a
            user-friendly search function with various filters to help users
            find the accommodation or service they need quickly and efficiently.
            <br />
            <strong>Reviews and Ratings:</strong> Users can read reviews and
            view ratings for both accommodations and service providers, helping
            them make informed decisions. <br />
            <strong>Booking and Payment:</strong> Accommodation booking and
            service requests can be made directly through the app, with secure
            payment options for convenience.
            <br />
            <strong>Chat and Support:</strong> Users can communicate with
            service providers or accommodation hosts via in-app chat, making it
            easy to discuss details and coordinate services.
            <br />
            <strong>Location Services:</strong> The app can use location data to
            show nearby options, making it convenient for users to find what
            they need in their vicinity.
            <br />
            <strong>User Profiles :</strong> Users can create profiles with
            preferences, making it easier for the app to suggest suitable
            accommodation and service providers.
            <br />
            <h4 style={{ marginTop: "1rem" }}>In summary</h4>
            This application is a one-stop solution for individuals seeking
            housing options or home services. It streamlines the process of
            finding and booking accommodations and connects users with reliable
            service professionals. Whether you're a student looking for a hostel
            room, a working professional seeking a plumber, or a homeowner in
            need of a painter, this app simplifies the search and booking
            process, enhancing convenience and peace of mind for users.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Team</h2>
          <div className="team">
            <div>
                <div className="teamImg">
                <img src="Assets/Images/header/gotam-removebg-preview-removebg-preview.png" alt="" />
                </div>
              <p className="teamName">Mr Gauwtam Bairagi <br />(Founder & CEO)</p>
            </div>
            <div>
            <div className="teamImg">
              <img src="Assets/Images/header/deepakkkkk-removebg-preview.png" alt="" />
                </div>
                <p className="teamName" style={{marginTop:"1rem"}}>Mr Deepak J Khañgoda <br />
(Co-Founder & CMO)</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUsPage;
