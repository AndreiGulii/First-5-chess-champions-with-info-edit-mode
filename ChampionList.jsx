const root = ReactDOM.createRoot(document.getElementById("root"));

const champions = [
  {
    id: 1,
    name: "Вильгельм Стейниц",
    yearsOfChampions: "1886—1894",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Wilhelm_Steinitz2.jpg",
  },
  {
    id: 2,
    name: "Эмануил Ласкер",
    yearsOfChampions: "1894—1921",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg",
  },
  {
    id: 3,
    name: "Хосе Рауль Капабланка",
    yearsOfChampions: "1921—1927",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg",
  },
  {
    id: 4,
    name: "Александр Алехин",
    yearsOfChampions: "1927—1935, 1937—1946",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Alexandre_Alekhine_Color.jpg",
  },
  {
    id: 5,
    name: "Макс Эйве",
    yearsOfChampions: "1935—1937",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Jacob_Merkelbach%2C_Afb_B00000002112.jpg",
  },
];

// TODO - Третий этап (Принять props)
const Champion = ({
  name,
  years,
  photo,
  handleEditChampion,
  handleDeleteChampion,
  index,
}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  // const [nameOfChampion, setNameOfChampion] = React.useState(name);
  // const [yearsOfChampion, setYearsOfChampion] = React.useState(years);

  const nameRef = React.useRef();
  const yearsRef = React.useRef();

  const handleClickSave = () => {
    // setNameOfChampion(nameRef.current.value);
    // setYearsOfChampion(yearsRef.current.value);
    handleEditChampion(index, nameRef.current.value, yearsRef.current.value);
    setIsEdit(false);
  };

  return (
    <div className="card mx-auto my-3" style={{ maxWidth: "400px" }}>
      <img className="card-img-top" src={photo} alt={name} />
      <div className="card-body">
        {isEdit ? (
          <div className="d-flex flex-column align-items-center">
            <label className="my-2">
              Name:
              <input
                className="form-control"
                type="text"
                ref={nameRef}
                defaultValue={name}
              />
            </label>

            <label className="my-2">
              Years of champion's:
              <input
                className="form-control"
                type="text"
                ref={yearsRef}
                defaultValue={years}
              />
            </label>

            <button className="btn btn-success my-3" onClick={handleClickSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <h1 className="card-title text-center">{name}</h1>
            <p className="card-text my-2">Years of champions: {years}</p>
            <div className="d-flex justify-content-center mt-2">
              <button
                className="btn btn-warning me-2"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
              {/* TODO - Четвёртый этап (Обработать событие клика на кнопку delete) */}
              <button
                className="btn btn-danger ms-2"
                onClick={handleDeleteChampion}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ChampionList = () => {
  const [listOfChampions, setListOfChampions] = React.useState(champions);

  const handleEditChampion = (index, newName, newYears) => {
    // State - unmute (не изменяем). Поэтому создаём копию
    const copyListOfChampions = [...listOfChampions];

    // Меняем копию на новое значение
    copyListOfChampions[index].name = newName;
    copyListOfChampions[index].yearsOfChampions = newYears;

    // Исправленная копия становится новым значением локального состояния
    setListOfChampions(copyListOfChampions);
  };

  const handleDeleteChampion = (index) => {
    // TODO - Первый этап (реализовать метод по удалению задачи)
    const copyListOfChampions = [...listOfChampions];
    // Splice удаляет элемент со стартовой позиции и кол-во штук для удаления
    copyListOfChampions.splice(index, 1);
    setListOfChampions(copyListOfChampions);

    // Второй вариант
    // _ означает что мы передаем в кач-ве первого параметра пустое значение
    //setListOfChampions = (listOfChampions.filter((_, ind) => ind !=index));

    // 3 вариант
    // const newListCopy = [];
    // for (let i = 0; i<listOfChampions.length; index++){
    //   if (i!= index){
    //     newListCopy.push(listOfChampions[i]);
    //   }
    // }
    // setListOfChampions(newListCopy);
  };

  return (
    <>
      {listOfChampions.map(
        ({ id, name, yearsOfChampions, photoUrl }, index) => (
          <Champion
            key={id}
            name={name}
            years={yearsOfChampions}
            photo={photoUrl}
            handleEditChampion={handleEditChampion}
            handleDeleteChampion={() => handleDeleteChampion(index)}
            // TODO - Второй этап (передача props)
            index={index}
          />
        )
      )}
    </>
  );
};

root.render(<ChampionList />);
