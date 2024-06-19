
class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestAvgSalary = 0;
        let bestDepartment = '';
        
        for (let department in this.departments) {
            let totalSalary = 0;
            let employees = this.departments[department];
            
            employees.forEach(employee => {
                totalSalary += employee.salary;
            });

            let avgSalary = totalSalary / employees.length;
            if (avgSalary > bestAvgSalary) {
                bestAvgSalary = avgSalary;
                bestDepartment = department;
            }
        }

        let sortedEmployees = this.departments[bestDepartment].sort((a, b) => {
            if (a.salary !== b.salary) {
                return b.salary - a.salary;
            } else {
                return a.name.localeCompare(b.name); 
            }
        });

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAvgSalary.toFixed(2)}`;
        
        sortedEmployees.forEach(employee => {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
        });

        return result;
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
