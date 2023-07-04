
const validateNumeric = (text) => {
      let result = prompt(text);
    
      while (!result || isNaN(result)) {
        alert("Вы ввели некорректные данные, попробуйте еще раз");
        result = prompt(text);
      }
    
      return +result;
    };
    
    const validateData = (text) => {
      let result = prompt(text);
    
      while (!result || !isNaN(result)) {
        alert("Вы ввели некорректные данные, попробуйте еще раз");
        result = prompt(text);
      }
    
      return result;
    };
  
  
  const gradationDats = (experience,isDifficultProjects,isEnglish,isTeamManagement,) => { 
      let grade = null;
      switch (true) {
          case experience > 2 && experience <= 5 && isEnglish:
            grade = "middle";
            break;
          case experience > 5 && isEnglish && isDifficultProjects:
            grade = "senior";
            break;
          case experience >= 10 && isEnglish && isDifficultProjects && isTeamManagement:
            grade = "principal";
            break;
          default:
            grade = "junior";
        }
        return grade;
  }
  const programmerSalary = (grade) => {
      let salary = null;
      switch (grade) {
          case "middle":
            salary = "от 1500$ до 2700$";
            break;
          case "senior":
            salary = "от 3000$";
            break;
          case "principal":
            salary = "от 7000$";
            break;
          default:
            salary = "от 300$ до 1500$";
        }
     return salary;
   }
  
   const chanceJob = (isEnglish, isDifficultProjects, isAlgorithms,) => { 
  let chance = null;
      switch (true) {
      case !isEnglish || !isAlgorithms:
        chance = "Шансов нет";
        break;
      case !isDifficultProjects:
        chance = "Шансов мало";
        break;
      default:
        chance = "Шансы есть";
    }
  return chance;
   }
  
  
  const showAnketa = ( fullName, experience, grade, chance,salary) => { 
      alert(`
      Ваше Имя: ${fullName}
      Ваш опыт в годах: ${experience}
      Градация: ${grade}
      Примерная зп: ${salary}
      Шансы попасть на работу в корпорацию: ${chance}
    `)
  }
  
  const init = () => { 
  const name = validateData("Введите имя");
  const surname = validateData("Введите фамилию");
  const experience = validateNumeric("Введите опыт работы в годах");
  const isDifficultProjects = confirm("Ваши проекты были сложные?");
  const isEnglish = confirm("Вы свободно говорите на английском?");
  const isAlgorithms = confirm("Ты знаешь Алгоритмы?");
  const isTeamManagement = confirm("Тебе нравится управлять командой?");
  const fullName = `${name} ${surname}`;
  const grade = gradationDats (experience, isEnglish,isDifficultProjects, isTeamManagement)
  const salary = programmerSalary (grade);
  const chance = chanceJob(isEnglish, isAlgorithms, isDifficultProjects);
  showAnketa(fullName, experience, grade, chance,salary)
  
  }
  init ( )


