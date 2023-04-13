import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { enableDebugTools } from '@angular/platform-browser';
import { CreateDialogComponent } from 'src/app/dialogs/Student/create-dialog/create-dialog.component';
import studentList from 'src/assets/json/students.json';

export interface student{
  id: number,
  name: string,
  lastName: string,
  email:string,
  phone: string,
  birthDate: Date,
  gender:string
  course:string
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
  students : student[] = studentList;
  displayedColumns: string[] = ['actions','id', 'fullName', 'email','phone','birthDate', 'gender', 'course'];
  dataSource = [...this.students];
  length: number = this.dataSource.length;

  @ViewChild(MatTable) table!: MatTable<student>;

  removeData(i: number) {
    this.dataSource.splice(i,1);
    this.table.renderRows();
  }

  constructor(public dialog: MatDialog){}
  openCreateStudentDialog(): void{
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {name: '', lastName: '', email: '', phone: '', birthDate: '', gender: '', course: ''}
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.length = this.length + 1;
        this.dataSource.push({...result, id: this.length});
        this.table.renderRows();
      }
    })
  }

  editData(i: number): void{
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {name: this.dataSource[i].name, lastName: this.dataSource[i].lastName, 
        email: this.dataSource[i].email, phone: this.dataSource[i].phone, birthDate: this.dataSource[i].birthDate,
         gender: this.dataSource[i].gender, course: this.dataSource[i].course}
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataSource[i] = ({...result, id: this.dataSource[i].id});
        this.table.renderRows();
      }
    })
  }
}

