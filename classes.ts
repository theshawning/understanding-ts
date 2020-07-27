class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  // protected means classes that extend this class can also access the property, while private means only the class the property is called in can access the property

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No Report Found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value.')
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }
    this.employees.push(name);
  }
  addReport(report: string) {
    this.reports.push(report)
    this.lastReport = report;
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

accounting.mostRecentReport = 'Year End Report';
console.log(accounting);
accounting.addReport('Something went wrong...');
accounting.printReports();

// const accountingCopy = { name: 'Accounting Copy', describe: accounting.describe };

// accountingCopy.describe()