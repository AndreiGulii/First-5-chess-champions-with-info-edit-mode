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

const Champion = ({ name, years, photo, handleEditChampion, index }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  //const [nameChanged, setName] = React.useState(name);
  //const [yearsChanged, setYears] = React.useState(years);

  // 1. Создание абстрактной (не связанной с конкретным элементом) ссылки
  const inputName = React.useRef();
  const inputYears = React.useRef();

  return isEdit ? (
    <div className="card mx-auto my-3" style={{ maxWidth: "400px" }}>
      <img className="card-img-top" src={photo} alt={name} />
      <div className="card-body">
        <div className="d-flex justify-content-center mt-2">
          <label className="my-2">
            Name :
            <input
              className="form-control"
              ref={inputName}
              type="text"
              defaultValue={name}
            />
          </label>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <label className="ms-2 my-2">
            Years :
            <input
              className="form-control mr-2"
              ref={inputYears}
              type="text"
              defaultValue={years}
            />
          </label>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            className="btn btn-success mx-3"
            onClick={() => {
              champions.name = setName(inputName.current.value);
              years = setYears(inputYears.current.value);
              setIsEdit(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="card mx-auto my-3" style={{ maxWidth: "400px" }}>
      <img className="card-img-top" src={photo} alt={name} />
      <div className="card-body">
        <h1 className="card-title text-center">{name}</h1>
        <p className="card-text text-center">{years}</p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-warning me-2"
            onClick={() => setIsEdit(true)}
          >
            Edit Name or Years
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => setIsEdit(true)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ChampionList = () => {
  const [listOfChampions, setListOfChampions] = React.useState(champions);

  const handleEditChampion = (index, newName, newYears) => {
    // Локальное состояние State не изменяемое поэтому создадим копию State
    const copyListOfChampions = [...listOfChampions];

    // Меняем копию на новое значение
    copyListOfChampions[index].name = newName;
    copyListOfChampions[index].name = newYears;

    setListOfChampions(copyListOfChampions);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Чемпионы мира по шахматам</h1>
      {listOfChampions.map(({ id, name, yearsOfChampions, photoUrl }) => (
        <Champion
          key={id}
          name={name}
          years={yearsOfChampions}
          photo={photoUrl}
          handleEditChampion={handleEditChampion}
        />
      ))}
    </>
  );
};
root.render(<ChampionList />);
