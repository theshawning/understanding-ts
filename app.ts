class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(report: string) {
    this.reports.push(report)
  }

  printReports() {
    console.log(this.reports)
  }
}

const sales = new Department('123', 'Sales');

sales.addEmployee('Max');
sales.addEmployee('Shawn');
sales.describe();
sales.printEmployeeInfo();


const help = new ITDepartment('321', ['Shinji'])

help.addEmployee('Shinji');
help.addEmployee('Marie');
console.log(help);


const accounting = new AccountingDepartment('d2', [])

console.log(accounting);
accounting.addReport('Something went wrong...');
accounting.printReports();

// const accountingCopy = { name: 'Accounting Copy', describe: accounting.describe };

// accountingCopy.describe()