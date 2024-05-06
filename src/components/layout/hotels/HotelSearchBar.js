import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import LocationIcon from "../../icon/LocationIcon";
import axios from "../../../config/privateAxios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHotelId,
  changeCity,
  selectHotel,
  changeStartDate,
  changeNights,
  changePersonQuantity,
  changeRoomQuantity,
  changePageNumber,
} from "../../../redux/features/hotelSlice";

import { changeHotels } from "../../../redux/features/hotelsSlice";
import CalenderIcon from "../../icon/CalenderIcon";
import { Calendar } from "react-date-range";
import NightIcon from "../../icon/NightIcon";
import React from "react";
import Select from "react-select";
import PersonAndRoomIcon from "../../icon/PersonAndRoomIcon";
import PersonIcon from "../../icon/PersonIcon";
import SubIcon from "../../icon/SubIcon";
import PlusIcon from "../../icon/PlusIcon";
import RoomIcon from "../../icon/RoomIcon";
import { toast } from "react-toastify";
import SearchIcon from "../../icon/SearchIcon";
import { useNavigate } from "react-router";
import { useFetchcitiesQuery } from "../../../redux/features/citiesApi";

function HotelSearchBar(params) {
  const navigate = useNavigate();
  const [selectedOpiton, setSelectedOpiton] = useState(null);

  const { data: cities } = useFetchcitiesQuery();

  const options = cities?.reduce((acc, item) => {
    acc.push({ value: item.name, label: item.name });
    return acc;
  }, []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
  };

  function handleChangeCity(city) {
    setSelectedOpiton(city);
  }

  function handleChangStartDate(date) {}

  function handleChangeNight(night) {}

  function handleOpenCalendar(params) {}
  function handleCloseCalendar(params) {}
  function handlePlusPersonQuantity() {}
  function handleSubPersonQuantity() {}
  function handlePlusRoomQuantity() {}
  function handleSubRoomQuantity() {}
  function handleOpenPersonAndRoom() {}
  function handleClosePersonAndRoom() {}
  function handleSearchHotel() {}
  console.log(options && options[2].label);

  return (
    <div className="hotelSearchBar">
      <div className="hotelSearchBarContainer">
        <div className="grid grid-cols-12 gap-4 content">
          <div className="col-span-3 item">
            <LocationIcon />
            <Select
              styles={customStyles}
              defaultValue={{
                value: options && options[2].label,
                label: options && options[2].label,
              }}
              className="react-select-container"
              classNamePrefix="react-select"
              value={selectedOpiton}
              options={options}
              onChange={handleChangeCity}
            />
          </div>
          <div className="col-span-3 item">
            <CalenderIcon />
            <input
              onClick={handleOpenCalendar}
              className="calendarSelected"
              type="text"
              // value={date.toLocaleDateString("vi-VN", options)}
              readOnly
            />
            <div
              onMouseLeave={handleCloseCalendar}
              // style={{ display: calendarDisplay }}
              className="calendarContainer"
            >
              <Calendar
                minDate={new Date(2024, 3, 7)}
                maxDate={new Date(2024, 3, 13)}
                className="customCalender"
                // date={date}
                onChange={handleChangStartDate}
              />
            </div>
          </div>
          <div className="col-span-2 item">
            <NightIcon />
            <Select
              // styles={customStyles}
              className="react-select-container"
              classNamePrefix="react-select"
              // defaultValue={night}
              onChange={handleChangeNight}
              // options={nights}
            />
          </div>
          <div className="col-span-2 item">
            <PersonAndRoomIcon />
            <input
              onClick={handleOpenPersonAndRoom}
              className="personAndRoomInput"
              type="text"
              readOnly
              // value={`${hotel.personQuantity} người, ${hotel.roomQuantity} phòng`}
            />
            <div
              onMouseLeave={handleClosePersonAndRoom}
              // style={{ display: personAndRoomDisplay }}
              className="selectPersonAndRoomContainer"
            >
              <div className="personQuantityContainer">
                <div className="leftItem">
                  <PersonIcon />
                  <div>Số người</div>
                </div>
                <div className="rightItem">
                  <button onClick={handleSubPersonQuantity} className="button">
                    <SubIcon />
                  </button>
                  <input
                    className="personQuantityInput"
                    // value={hotel.personQuantity}
                    type="text"
                    readOnly
                  />
                  <button onClick={handlePlusPersonQuantity} className="button">
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div className="roomQuantityContainer">
                <div className="leftItem">
                  <RoomIcon />
                  <div>Số phòng</div>
                </div>
                <div className="rightItem">
                  <button onClick={handleSubRoomQuantity} className="button">
                    <SubIcon />
                  </button>
                  <input
                    className="roomQuantityInput"
                    // value={hotel.roomQuantity}
                    type="text"
                    readOnly
                  />
                  <button onClick={handlePlusRoomQuantity} className="button">
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div onClick={handleSearchHotel} className="col-span-2 button">
            <SearchIcon />
            <div className="searchText">Tìm khách sạn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelSearchBar;
