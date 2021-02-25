import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title display behavior examples for toolbar
 */
@Component({
  selector: "display-examples",
  templateUrl: "display-examples.html",
  styleUrls: ["display-examples.css"]
})
export class DisplayExamples {
  events: string[] = [];
  opened: boolean;

  lightMenu = false;

  invertMenuColor() {
    this.lightMenu = !this.lightMenu;
    console.log("LightMenu: " + this.lightMenu);
  }

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(UserProfileDialog, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}

@Component({
  selector: "userprofile-dialog",
  templateUrl: "./userprofile-dialog.html"
})
export class UserProfileDialog {
  constructor(
    public dialogRef: MatDialogRef<UserProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
