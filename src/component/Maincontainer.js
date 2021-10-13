import React,{useState} from "react";
import "../styles/maincontainer.css";
import { FaUserPlus, FaTrashAlt, FaUserEdit, FaInfo } from "react-icons/fa";
import userDetails from "./usersdetails";
import AdduserWidget from "./adduserwidget";

function Maincontainer() {
  var uniqvalue = 0;
  const [ouruser, setouruser] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    imgSrc:
      "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-user-silhouette-glasses-profile.jpg",
    text: "",
  });
  const [userDetailslist] = useState(userDetails);
  const [openorcloseadduserwidget, setopenorcloseadduserwidget] =
    useState(false);
  const [openorcloseshowdetailswidget, setopenorcloseshowdetailswidget] =
    useState(false);

  const [flitertheuserdetailslist, setflitertheuserdetailslist] =
    useState(userDetailslist);

  // delete functions
  const deleteall = () => {
    setflitertheuserdetailslist([]);
  };
  const deleteone = (item) => {
    setflitertheuserdetailslist(
      flitertheuserdetailslist.filter((contact) => contact.name !== item.name)
    );
  };

  return (
    <main className="mymaincontainer">
      <header className="my-inside-main-header">
        <ul>
          <li>
            <input
              onChange={(e) => {
                const searchedata = userDetailslist.filter((contact) =>
                  contact.name.toLowerCase().includes(e.target.value)
                );
                setflitertheuserdetailslist(searchedata);
              }}
              className="searchbar"
              placeholder="search"
            />
          </li>
          <li>
            <button
              id="addcontact"
              onClick={(e) => {
                // when we press here we open add new user window
                setopenorcloseadduserwidget(
                  (openorcloseadduserwidget) => !openorcloseadduserwidget
                );
                setouruser({
                  name: "",
                  phone: "",
                  address: "",
                  email: "",
                  imgSrc:
                    "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-user-silhouette-glasses-profile.jpg",
                  text: "",
                });
              }}
              className="addcontact"
            >
              <FaUserPlus size={25} />
            </button>
          </li>
          <li>
            <button
              id="deleteAll"
              onClick={() => {
                deleteall();
              }}
            >
              <FaTrashAlt size={25} />
            </button>
          </li>
        </ul>
      </header>
      <div classname="my-list-container"></div>

      <div className="user-details-list-container">
        {/** we use map to loop in our list of users */}
        {flitertheuserdetailslist.map((user) => (
          <div className="contact" key={uniqvalue++}>
            {/** speciefic userdetails */}
            <li>
              <img src={user.imgSrc} alt="we dont have " />
              <h3>{user.name}</h3>
              <div></div>

              {/** speciefic useractions */}

              {/** when we  pressed  open window show details about the user */}
              <button
                onClick={() => {
                  // function that show window with the user details

                  setopenorcloseshowdetailswidget(
                    (openorcloseshowdetailswidget) =>
                      !openorcloseshowdetailswidget
                  );
                  setouruser({
                    name: user.name,
                    phone: user.phone,
                    address: user.address,
                    email: user.email,
                    imgSrc: user.imgSrc,
                    text: user.text,
                  });
                }}
              >
                <FaInfo />
              </button>

              {/*when we pressed we open window and to edit the details of the user*/}
              <button
                onClick={() => {
                  setopenorcloseadduserwidget(
                    (openorcloseadduserwidget) => !openorcloseadduserwidget
                  );
                  setouruser({
                    name: user.name,
                    phone: user.phone,
                    address: user.address,
                    email: user.email,
                    imgSrc: user.imgSrc,
                    text: user.more,
                  });
                }}
              >
                <FaUserEdit />
              </button>
              {/** when we pressed we delete the  user by his name */}
              <button
                onClick={() => {
                  deleteone(user);
                }}
              >
                <FaTrashAlt />
              </button>
            </li>
          </div>
        ))}

        {flitertheuserdetailslist.length === 0 ? (
          <div>the list is empty</div>
        ) : null}
      </div>

      {/** showdetails component */}
      {openorcloseshowdetailswidget ? (
        <div className="showdetailswidget">
          <div>
            <div className="exitbutton">
              <button
                onClick={() => {
                  setopenorcloseshowdetailswidget(
                    (openorcloseshowdetailswidget) =>
                      !openorcloseshowdetailswidget
                  );
                }}
              >
                X
              </button>
            </div>
          </div>

          <img className="imageinshow" alt="H" src={ouruser.imgSrc}></img>
          <p>{ouruser.name}</p>
          <p>{ouruser.address}</p>
          <p>{ouruser.email}</p>
          <p>{ouruser.phone}</p>
          <p>{ouruser.text}</p>
        </div>
      ) : null}

      {/** showdetails component */}

      {/**  adduser component */}
      {openorcloseadduserwidget ? (
        <AdduserWidget
          setouruser={setouruser}
          setopenorcloseadduserwidget={setopenorcloseadduserwidget}
          user={ouruser}
          add={(newuser) => {
            setflitertheuserdetailslist([...userDetailslist, newuser]);
            setopenorcloseadduserwidget(
              (openorcloseadduserwidget) => !openorcloseadduserwidget
            );
          }}
          save={(newuser, name) => {
            const helplist = flitertheuserdetailslist.map((user) => {
              if (user.name === name) {
                const updatedItem = {
                  ...user,

                  name: newuser.name,
                  address: newuser.address,
                  email: newuser.email,
                  description: newuser.description,
                  phone: newuser.phone,
                };

                return updatedItem;
              }

              return user;
            });

            setflitertheuserdetailslist(helplist);

            setopenorcloseadduserwidget(
              (openorcloseadduserwidget) => !openorcloseadduserwidget
            );
          }}
        />
      ) : null}
    </main>
  );
}

export default Maincontainer;
