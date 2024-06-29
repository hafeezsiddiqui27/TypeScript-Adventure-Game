#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



//displaying welcome message
console.log(
  chalk.bold.yellow(
    `\n  \t\t <<<================================================>>>`
  )
);
console.log(
  chalk.bold.blue(
    `<<<=========>>>  ${chalk.blueBright.bold(
      "Welcome To 'Hafeez Siddiqui' - Adventure Game"
    )}  <<<=========>>>`
  
  )
);
console.log(
  chalk.bold.yellow(
    `\t\t <<<===============================================>>>\n`
  )
);


class Hero{
    name: string;
    health = 100;
    
    constructor(name: string) {
        this.name = name
        this.health =100
    }
    
    decreasehealth() {
        this.health -= 20
    }
    increasehealth() {
        this.health = 100
    }
}

class Enemy {
    name: string
    health = 100
    
    constructor(name: string) {
        this.name = name
    }
    
    decreasehealth() {
        this.health -= 20
    }
    increasehealth() {
        this.health = 100
    }
}
//step 2
async function main() {
    const heroName = await inquirer.prompt([{
        name: "heroName",
        type: "input",
        message: chalk.green("Enter your hero name")

    }])
    //object 2 for enemy
    
    const enemytype = await inquirer.prompt([{
        name: "enemyType",
        type: "list",
        message: chalk.red("Select your Opponent"),
        choices: ["alien", "witch", "zombie"]
    
    }])
    //step 3:battlefield
    
    const hero = new Hero(heroName.heroName)
    const enemy = new Enemy(enemytype.enemyType)
    
    console.log(chalk.yellow(`\n\t${hero.name} v/s ${enemy.name}\n\t`));
    


    do {
        const { action } = await inquirer.prompt([
            // action object
            {
                name: "action",
                type: "list",
                message:chalk.magenta ("Choose an action to perform"),
                choices: ["attack", "defend", "range target", "run"]
                
            
            }])
    
        //step 5 switch case
    


        switch (action) {
            case "attack":
                const randomNumber = Math.random();
                if (randomNumber > 0.5) {
                    hero.decreasehealth();
                    console.log(chalk.yellow(`${hero.name} : health :${hero.health}`));
                    console.log(chalk.red(`${enemy.name} : health :${enemy.health}`));
                    if (hero.health <= 0) {
                        console.log(chalk.red.bold(`\n\t\tYou Loss! Try Again`))
                        return
                    }
                
                
                } else {
                    //enemy health decrease===
                    enemy.decreasehealth()
                    enemy.decreasehealth()
                    console.log(chalk.yellow(`${hero.name} : health :${hero.health}`));
                    console.log(chalk.red(`${enemy.name} :health :${enemy.health}`));
                    if (enemy.health <= 0) {
                        console.log(chalk.greenBright.bold(`\n\t\tCongratulations! You Won`))
                        return;
                    }
                }
                break;
        }
    
    } while (true);
        
}
main()



