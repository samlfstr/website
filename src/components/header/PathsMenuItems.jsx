import React from "react";
import "../../App.css";
import FundamentalsIcon from '../../assets/images/FundamentalsIcon.svg';
import FronEndDevIcon from '../../assets/images/FronEndDevIcon.svg';
import BackEndIcon from '../../assets/images/BackEndIcon.svg';
import GameDevIcon from '../../assets/images/GameDevIcon.svg';
import MobileDevIcon from '../../assets/images/MobileDevIcon.svg';
export const PathsMenuItems = () => {
  const imageData = [
	{
	  fileName: FundamentalsIcon,
	  title: "Essential courses",
	  text: "Fundamentals",
	},
	{
	  fileName: FronEndDevIcon,
	  title: "Fron-End Dev",
	  text: "Front End Dev",
	},
	{
	  fileName: BackEndIcon,
	  title: "Back-End Dev",
	  text: "Fundamentals",
	},
	{
	  fileName: GameDevIcon,
	  title: "Game Dev",
	  text: "Game Dev",
	},
	{
	  fileName: MobileDevIcon,
	  title: "MobileDev",
	  text: "MobileDev",
	}
	// ... (add more objects as needed)
  ];
  
  return (
	  <>
		{imageData.map((item, index) => (
			<div className="fundamentals" key={index}>
			  <div className="overlap-fundamentals">
				<div className="overlap-group">
				  <img
					  className="fundamentals-icon"
					  alt={`PathsMenuItems icon - ${item.title}`}
					  src={item.fileName}/>
				</div>
				<div className="essantial-courses">{item.title}</div>
				<div className="text-wrapper">{item.text}</div>
			  </div>
			</div>
		))}
	  </>
  );
};
