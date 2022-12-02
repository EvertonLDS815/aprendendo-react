import Item from './Item'

function List() {
  return (
    <>
        <h1>Everton</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1982} />
            <Item marca="Fiat" ano_lancamento={1964} />
            <Item marca="Toyota" />
            <Item marca="Chevrolet" ano_lancamento={1999} />
            <Item />
        </ul>
    </>
  );
}

export default List;