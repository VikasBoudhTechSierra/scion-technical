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
  // const [searchText, setSearchText] = useState("");

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
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  //just for console data
  const handleSearch = () => {
    console.log("Search button clicked");
    console.log("Keyword:", keyword);
    console.log("Employment Type:", employmentType);
    console.log("Location Requirements:", locationRequirements);
    console.log("State:", selectedState);
    console.log("City:", selectedCity);
    // You can perform search operations here

    // Filter jobs based on selected location
    const filteredJobs = jobs.filter((job) => job.location === selectedCity);

    // Log filtered jobs for testing
    console.log("Filtered Jobs:", filteredJobs);

    // You can update state or perform further operations with filteredJobs
  };

  const cityOptions = getCityOptions();

  // Pagination logic
  const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // checkbox search function
  const handleSearchButtonClick = () => {
    const checkedCategories = Object.keys(checkedItems).filter(
      (category) => checkedItems[category]
    );
    console.log("Checked categories:", checkedCategories);
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
                disabled={
                  !selectedState || !selectedCity
                  //  ||
                  // !employmentType ||
                  // !locationRequirements
                }
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="leftCheckBoxContainer">
              <h3>Categories</h3>
              <button className="checkbtn">Check All</button>
              <button className="checkbtn">Uncheck All</button>
              {/* Generate checkboxes for each category */}
              {categories.map((category, index) => (
                <div key={category} className="checkbox">
                  <input
                    type="checkbox"
                    name={category}
                    checked={checkedItems[category] || false}
                    onChange={handleCheckboxChange}
                  />
                  <label>{category}</label>
                </div>
              ))}

              <button className="searchBtn" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
          </div>
          <div className="searchItJobsRight">
            <div className="rightBoxContainer">
              {currentJobs.map((job, index) => (
                <div className="searchItJobRightBox" key={index}>
                  <h3>{job.title}</h3>
                  <p>
                    <strong>Location: </strong> {job.state} , {jobs.city}
                  </p>
                  <p>{job.description}</p>
                  <button>LEARN MORE</button>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <ul className="pagination">
              {Array.from({
                length: Math.ceil(jobs.length / ITEMS_PER_PAGE),
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
