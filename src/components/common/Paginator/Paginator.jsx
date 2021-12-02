import React, {useState} from 'react';
import s from "./Paginator.module.css";
import arrow from '../../../assets/images/arrow.png'
import cn from "classnames";


const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div className={s.paginatorLine}>
      <div className={cn(s.arrow, s.arrowPrev)}>{portionNumber > 1 &&
      <div onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}><img src={arrow}/></div>
      }
      </div>

      <div className={s.paginatorPages}>
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
            return <div className={s.paginatorPage}>
              <span className={cn({
                [s.selectedPage]: currentPage === p
              }, s.pageNumber)}
                    key={p}
                    onClick={(e) => {
                      onPageChanged(p);
                    }}>{p}</span>
            </div>
          })}
      </div>

      {portionCount > portionNumber &&
      <div className={s.arrow} onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}><img src={arrow}/></div>}

    </div>
  );
};

export default Paginator;
