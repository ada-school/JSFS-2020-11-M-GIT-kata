const users = [
  {
    id: 1,
    name: "Ada",
    username: "ada@ada-school.org",
    rol: "MENTOR",
  },
  {
    id: 2,
    name: "Mentor",
    username: "mentor@ada-school.org",
    rol: "MENTOR",
  },
  {
    id: 3,
    name: "Mentor 2",
    username: "mentor2@ada-school.org",
    rol: "MENTOR",
  },
];

const bookings = [];

/**
 * Devuelve una lista de mentores o mentoras presentes en la lista de usuarios.
 * @return {Array} Lista de mentores o mentoras
 */
export function find_mentors() {
  // TODO 1
}

/**
 * Devuelve un mentor a partir de su "id"
 * @return {Mentor} Objeto con la informacion del mentor
 * @example
 * {
 *    id: 1,
 *    name: "Ada",
 *    username: "ada@ada-school.org",
 * }
 */
export const find_mentor_by_id = (mentor_Id) => {
  // TODO 2
};

/**
 * Agrega un mentor a la lista de bookings
 * @return {Array} Lista de bookings con el mentor agregado como primer selemento
 */
export const bookA_Mentor = (mentor_Id) => {
  for (let i=0 ; i < users.length ; i++) {
    if (users[i].id === mentor_Id) {
      bookings.unshift(users[i]);
      break;
    }
  }
  return bookings;
};

/**
 * ⛔️ ZONA DE NO EDICIÓN ⛔️
 * Por favor no editar esta zona
 */
