import React from 'react';
import { UserContext } from './../../UserContext';
import ReactPaginate from 'react-paginate';

export const CategoriesResults = () => {
  const { setSelect, select, data, params, setParams } =
    React.useContext(UserContext);

  const [execute, setExecute] = React.useState(data.listAll());
  const [pagination, setPagination] = React.useState({
    dataList: (props) => {
      return props.map(({ id, image, name, price, specialPrice }) => ({
        id,
        image,
        name,
        price,
        specialPrice,
      }));
    },
    offset: 0,
    numberPerPage: 5,
    pageCount: 0,
    currentData: [],
  });

  React.useEffect(() => {
    if (select) {
      if (params !== 2) {
        setExecute(data.filterColor());
      } else {
        setExecute(data.filterGender());
      }
    } else {
      setExecute(data.listAll());
      setSelect(null);
    }
  }, [params, setParams, data, select, setSelect, setExecute]);

  React.useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.dataList(execute).length / prevState.numberPerPage,
      currentData: prevState
        .dataList(execute)
        .slice(pagination.offset, pagination.offset + pagination.numberPerPage),
    }));
  }, [execute, pagination.numberPerPage, pagination.offset]);

  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  return (
    <>
      {' '}
      <ul className="products">
        {pagination.currentData &&
          pagination.currentData.map(
            ({ id, image, name, price, specialPrice }) => (
              <li key={id} className="animeRigth">
                <img className="product-img" src={image} alt={name} />
                <p className="product-title">{name}</p>

                <p className="product-price">
                  {specialPrice
                    ? [
                        <span key="1" className="product-price-special">
                          R$ {specialPrice.toFixed(2).replace('.', ',')}
                        </span>,
                        <span key="2">
                          R$ {price.toFixed(2).replace('.', ',')}
                        </span>,
                      ]
                    : `R$ ${price.toFixed(2).replace('.', ',')}`}
                </p>

                <button className="product-buy">COMPRAR</button>
              </li>
            )
          )}{' '}
      </ul>
      <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'page-active'}
        nextClassName={'page-number'}
        previousClassName={'page-number'}
        pageClassName={'page-number'}
      />
    </>
  );
};
