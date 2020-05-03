let dataMock = [
  {
    id: '1',
    firstname: 'Pawel',
    lastname: 'Bujna',
    avatarUrl: 'https://avatars.dicebear.com/v2/male/a.svg?radius=6',
    email: 'pawelbujna@gmail.com',
    phone: '601929793',
    hasPremium: true,
    bids: [
      {
        id: '1',
        carTitle: 'Toyota Supra',
        amount: 3,
        created: '2010'
      },
      {
        id: '2',
        carTitle: 'Honda Civic',
        amount: 10,
        created: '2017'
      },
      {
        id: '3',
        carTitle: 'Toyota Previa',
        amount: 54,
        created: '2007'
      }
    ]
  },
  {
    id: '2',
    firstname: 'Piotr',
    lastname: 'Szczepanik',
    avatarUrl: 'https://avatars.dicebear.com/v2/male/v.svg?radius=6&margin=2',
    email: 'piotrszczepanik@gmail.com',
    phone: '536223456',
    hasPremium: false,
    bids: []
  },
  {
    id: '3',
    firstname: 'Wojciech',
    lastname: 'Głowa',
    avatarUrl: 'https://avatars.dicebear.com/v2/male/s.svg?radius=6&margin=2',
    email: 'wojciechglowa@gmail.com',
    phone: '773928827',
    hasPremium: true,
    bids: []
  },
  {
    id: '4',
    firstname: 'Jacek',
    lastname: 'Baklazan',
    avatarUrl: 'https://avatars.dicebear.com/v2/male/c.svg?radius=6&margin=2',
    email: 'jacekbaklazan@gmail.com',
    phone: '45673',
    hasPremium: false,
    bids: [
      {
        id: '1',
        carTitle: 'Ford Focus',
        amount: 77,
        created: '1995'
      },
      {
        id: '2',
        carTitle: 'Volkswagen Passat',
        amount: 999,
        created: '2020'
      }
    ]
  },
  {
    id: '5',
    firstname: 'Jagoda',
    lastname: 'Truskawka',
    avatarUrl: 'https://avatars.dicebear.com/v2/female/i.svg',
    email: 'jagodatruskawka@gmail.com',
    phone: '839445632',
    hasPremium: true,
    bids: []
  },
  {
    id: '6',
    firstname: 'Karolina',
    lastname: 'Pomylka',
    avatarUrl: 'https://avatars.dicebear.com/v2/female/r.svg',
    email: 'karolinapomylka@gmail.com',
    phone: '999999999',
    hasPremium: true,
    bids: []
  },
  {
    id: '7',
    firstname: 'Grazyna',
    lastname: 'Patolska',
    avatarUrl: 'https://avatars.dicebear.com/v2/female/n.svg',
    email: 'grazynapatolska@gmail.com',
    phone: '696969696',
    hasPremium: false,
    bids: [
      {
        id: '1',
        carTitle: 'Kia Rio',
        amount: 129,
        created: '2016'
      },
      {
        id: '2',
        carTitle: 'Opel Insignia',
        amount: 15,
        created: '2020'
      }
    ]
  },
  {
    id: '8',
    firstname: 'Andrzej',
    lastname: 'Dycha',
    avatarUrl: 'https://avatars.dicebear.com/v2/male/b.svg?radius=6&margin=2',
    email: 'andrzejdycha@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: []
  },
  {
    id: '9',
    firstname: 'Tomasz',
    lastname: 'Srubokret',
    avatarUrl: 'https://avatars.dicebear.com/v2/male/n.svg?radius=6&margin=2',
    email: 'tomaszsrubokret@gmail.com',
    phone: '273849905',
    hasPremium: false,
    bids: []
  }
]

const mockPromise = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

let pageNumberServer;
let usersPerPageServer;

const get = (pageNumber, usersPerPage) => {
  const pagesAmount = Math.ceil(dataMock.length / usersPerPage);
  usersPerPageServer = usersPerPage;
  pageNumberServer = pageNumber > pagesAmount ? pagesAmount : pageNumber
  const lastItemIndex = pageNumberServer * usersPerPageServer;
  const firstItemIndex = lastItemIndex - usersPerPageServer;

  return mockPromise({
    data: dataMock.slice(firstItemIndex, lastItemIndex),
    pagination: {
      currentPage: pageNumberServer,
      pagesAmount
    }
  })
}

const getById = id => {
  return mockPromise(dataMock.find(obj => obj.id === id))
}

const save = (user) => {
  user.id !== undefined ?
    (dataMock[parseInt(user.id, 10) - 1] = user)
    : dataMock.push({ ...user, bids: [], id: (dataMock.length + 1).toString() })
}

const deleteUser = id => {
  dataMock = dataMock.filter(obj => obj.id !== id)

  return get(pageNumberServer, usersPerPageServer);
}

// I know theres a warning in the cosole, but im testing it from time to time. I wont forget about it by not commenting this
// const throwError = () => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 500)
//   )
// }

const UsersService = {
  // Testing handling errors
  // get: throwError,
  get,
  getById,
  save,
  deleteUser
};

export default UsersService;
