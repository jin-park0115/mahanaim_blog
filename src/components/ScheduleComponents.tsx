import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "@/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import IconComponent from "./IconComponents";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Schedule {
  id: string;
  title: string;
  date: Timestamp;
  time: string;
  location: string;
}

const ScheduleComponents = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const q = query(collection(db, "schedule"), orderBy("date", "asc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Schedule, "id">),
        }));

        setSchedules(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <Container>
      <div className="top">
        <Link to="/">
          <IconComponent icon={IoArrowBackOutline} size={20} />
        </Link>
        <div className="title">
          <h1>일정</h1>
        </div>
      </div>
      <div className="wrap">
        {schedules.map((item) => (
          <div key={item.id} className="item">
            <p className="date">{item.date.toDate().toLocaleDateString()}</p>
            <div className="lo_time">
              <p className="time">
                {item.date.toDate().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ScheduleComponents;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .top {
    display: flex;
    align-items: center;
    position: relative;
    top: 10px;
  }
  .title {
    position: absolute;
    right: 50%;
    transform: translateX(-50%);
  }
  .wrap {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .item {
    border: 1px solid #ececee;
    border-radius: 8px;
  }
  .date {
    display: flex;
    align-items: center;
    background-color: #f7f9fa;
    border-radius: 8px 8px 0px 0px;
    height: 54px;
    padding: 0 20px;
    font-weight: bold;
  }
  .lo_time {
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    border-radius: 0px 0px 8px 8px;
    height: 62px;
  }
  .location {
    color: rgb(133, 136, 147);
  }
  .time {
    color: #303038;
    font-weight: bold;
  }
`;
