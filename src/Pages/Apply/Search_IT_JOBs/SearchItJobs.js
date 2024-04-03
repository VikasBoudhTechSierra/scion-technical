import React, { useState } from "react";
import "./Search_IT_Jobs.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import TemporaryStuffingHeading from "../../../Components/TemporaryStaffingFunction/TemporaryStuffingHeading/TemporaryStuffingHeading";
import { jobs } from "./Search_IT_Jobs_Data";

const ITEMS_PER_PAGE = 10; // Number of items to display per page

const SearchItJobs = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [locationRequirements, setLocationRequirements] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  //states of india
  const states = [
    "State",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  //cities of the states in india
  const cities = {
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
      "Tirupati",
      "Kadapa",
      "Anantapur",
      "Vizianagaram",
    ],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
    Assam: [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Jorhat",
      "Nagaon",
      "Tinsukia",
      "Tezpur",
      "Bongaigaon",
      "Dhubri",
      "Diphu",
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Purnia",
      "Darbhanga",
      "Bihar Sharif",
      "Arrah",
      "Begusarai",
      "Katihar",
    ],
    Chhattisgarh: [
      "Raipur",
      "Bhilai",
      "Bilaspur",
      "Korba",
      "Rajnandgaon",
      "Raigarh",
      "Durg",
      "Ambikapur",
      "Jagdalpur",
      "Chirmiri",
    ],
    Goa: [
      "Panaji",
      "Vasco da Gama",
      "Margao",
      "Mapusa",
      "Ponda",
      "Bicholim",
      "Curchorem",
      "Sanguem",
      "Cuncolim",
      "Sanquelim",
    ],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Junagadh",
      "Gandhinagar",
      "Nadiad",
      "Anand",
    ],
    Haryana: [
      "Faridabad",
      "Gurgaon",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Panchkula",
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Mandi",
      "Solan",
      "Dharamsala",
      "Palampur",
      "Kullu",
      "Chamba",
      "Una",
      "Nahan",
      "Bilaspur",
    ],
    Jharkhand: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro",
      "Deoghar",
      "Phusro",
      "Hazaribagh",
      "Giridih",
      "Ramgarh",
      "Medininagar",
    ],
    Karnataka: [
      "Bangalore",
      "Hubli-Dharwad",
      "Mysore",
      "Gulbarga",
      "Mangalore",
      "Belgaum",
      "Davanagere",
      "Bellary",
      "Shimoga",
      "Tumkur",
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kollam",
      "Thrissur",
      "Palakkad",
      "Alappuzha",
      "Malappuram",
      "Kannur",
      "Manjeri",
    ],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Dewas",
      "Satna",
      "Ratlam",
      "Rewa",
    ],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Thane",
      "Nashik",
      "Kalyan-Dombivali",
      "Vasai-Virar",
      "Aurangabad",
      "Navi Mumbai",
      "Solapur",
    ],
    Manipur: ["Imphal", "Thoubal"],
    Meghalaya: ["Shillong", "Tura"],
    Mizoram: ["Aizawl", "Lunglei"],
    Nagaland: ["Dimapur", "Kohima"],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Berhampur",
      "Sambalpur",
      "Puri",
      "Balasore",
      "Bhadrak",
      "Baripada",
      "Jharsuguda",
    ],
    Punjab: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "S.A.S. Nagar",
      "Hoshiarpur",
      "Batala",
      "Pathankot",
      "Moga",
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Udaipur",
      "Bhilwara",
      "Alwar",
      "Bharatpur",
      "Sikar",
    ],
    Sikkim: ["Gangtok"],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tiruppur",
      "Erode",
      "Vellore",
      "Thoothukkudi",
      "Tirunelveli",
    ],
    Telangana: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Ramagundam",
      "Khammam",
      "Mahbubnagar",
      "Nalgonda",
      "Adilabad",
      "Suryapet",
    ],
    Tripura: ["Agartala"],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Ghaziabad",
      "Agra",
      "Varanasi",
      "Meerut",
      "Allahabad",
      "Bareilly",
      "Aligarh",
      "Moradabad",
    ],
    Uttarakhand: [
      "Dehradun",
      "Haridwar",
      "Roorkee",
      "Haldwani",
      "Rudrapur",
      "Kashipur",
      "Rishikesh",
      "Nainital",
      "Srinagar",
      "Pithoragarh",
    ],
    "West Bengal": [
      "Kolkata",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "English Bazar",
      "Baharampur",
      "Habra",
      "Kharagpur",
      "Shantipur",
    ],
    "Andaman and Nicobar Islands": ["Port Blair"],
    Chandigarh: ["Chandigarh"],
    "Dadra and Nagar Haveli": ["Silvassa"],
    "Daman and Diu": ["Daman", "Diu"],
    Lakshadweep: ["Kavaratti"],
    Delhi: ["Delhi"],
    Puducherry: ["Puducherry", "Karaikal", "Yanam", "Mahe"],
  };

  const categories = [
    "Administrative",
    "Architecture",
    "Communication/PR",
    "Construction Management",
    "Creative",
    "Architecture",
    "Customer Service/Call Center",
    "Education",
    "Engineering",
    "Executive Level",
    " Finance/Accounting",
    "Fundraising/Development",
    " Healthcare/Medical",
    "Hospitality",
    "Human Resources",
    " Industrial/General Labor",
    "Information Technology",
    " Legal/Government",
    "Marketing",
    "Media",
    "Nonprofit Program(s)",
    "Operations",
    " Other",
    "Project Management",
    "Research/BioPharma",
    " Sales/Business Development",
    " Scientific/Environmental",
    " Tech Sierra Careers",
  ];

  const jobTitles = [
    "Software Engineer",
    "Data Analyst",
    "Project Manager",
    "UI/UX Designer",
  ];

  // Reset city selection when the state changes
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Define city options based on the selected state
  const getCityOptions = () => {
    return cities[selectedState] ?? [];
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  //just for console data
  const handleSearch = () => {
    // Filter jobs based on selected location and keyword
    const filteredJobs = jobs.filter(
      (job) =>
        job.state === selectedState &&
        job.city === selectedCity &&
        job.title.toLowerCase().includes(keyword.toLowerCase())
    );

    // Set the filtered jobs state
    setFilteredJobs(filteredJobs);
  };

  const cityOptions = getCityOptions();

  // Pagination logic
  const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // checkbox search function
  // const handleSearchButtonClick = () => {
  //   const checkedJobTitles = Object.keys(checkedItems).filter(
  //     (jobTitle) => checkedItems[jobTitle]
  //   );
  //   console.log("Checked job titles:", checkedJobTitles);
  // };

  const handleSearchButtonClick = () => {
    // Filter jobs based on selected location and keyword
    const filteredJobs = jobs.filter(
      (job) =>
        job.state === selectedState &&
        job.city === selectedCity &&
        job.title.toLowerCase().includes(keyword.toLowerCase())
    );

    // Filter the filtered jobs based on checked job titles
    const checkedJobTitles = Object.keys(checkedItems).filter(
      (jobTitle) => checkedItems[jobTitle]
    );

    // Filter the already filtered jobs based on checked job titles
    const filteredJobsWithCheckedTitles = filteredJobs.filter((job) =>
      checkedJobTitles.includes(job.title)
    );

    // Set the filtered jobs state
    setFilteredJobs(filteredJobsWithCheckedTitles);
  };

  return (
    <>
      <div className="searchItJobs wrapper">
        <Header />
        <TemporaryStuffingHeading
          h1={["Search IT Jobs & Apply Online"]}
          h3={[
            " Find Your Dream Technology Job with Tech Sierra Technology Staffing",
          ]}
        />
        <div className="searchItJobsContainer">
          <div className="searchItJobsLeft">
            <div className="searchItJobsDropdown">
              <div className="custom-select employmentType">
                <input
                  placeholder="Keyword"
                  label="Keyword"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                />
              </div>
              <div className="custom-select employmentType">
                <select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <option value="">Employment Type:</option>
                  <option value="Contract">Contract</option>
                  <option value="Contract To Hire">Contract To Hire</option>
                  <option value="Direct Hire">Direct Hire</option>
                  <option value="Retained">Retained</option>
                </select>
              </div>
              <div className="custom-select locationRequirements">
                <select
                  value={locationRequirements}
                  onChange={(e) => setLocationRequirements(e.target.value)}
                >
                  <option value="">Location Required</option>
                  <option value="Hibrid">Hybrid</option>
                  <option value="On-Site">On-Site</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div className="custom-select state">
                <select value={selectedState} onChange={handleStateChange}>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="custom-select city">
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  disabled={!selectedState} // Disable city dropdown until a state is selected
                >
                  <option value="">Select City</option>
                  {selectedState !== "" &&
                    cityOptions.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>
              <button
                className="searchBtn"
                disabled={!selectedState || !selectedCity}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="leftCheckBoxContainer">
              <h3>Job Titles</h3>
              {/* Generate checkboxes for each job title */}
              {jobTitles.map((jobTitle, index) => (
                <div key={index} className="checkbox">
                  <input
                    type="checkbox"
                    name={jobTitle}
                    checked={checkedItems[jobTitle] || false}
                    onChange={handleCheckboxChange}
                  />
                  <label>{jobTitle}</label>
                </div>
              ))}
              <button className="searchBtn" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
          </div>
          <div className="searchItJobsRight">
            <div className="rightBoxContainer">
              {/* Map over filtered jobs and render each job */}
              {filteredJobs.length > 0 ? (
                currentJobs.map((job, index) => (
                  <div className="searchItJobRightBox" key={index}>
                    <h3>{job.title}</h3>
                    <p>
                      <strong>Location: </strong> {job.state}, {job.city}
                    </p>
                    <p>{job.description}</p>
                    <button>LEARN MORE</button>
                  </div>
                ))
              ) : (
                <p>No jobs found</p>
              )}
            </div>
            {/* Pagination */}
            <ul className="pagination">
              {Array.from({
                length: Math.ceil(filteredJobs.length / ITEMS_PER_PAGE),
              }).map((_, index) => (
                <li key={index} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link ${
                      currentPage === index + 1 ? "selected" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchItJobs;
