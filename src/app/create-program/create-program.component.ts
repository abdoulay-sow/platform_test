import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { UploadMediaService } from '../upload-media.service';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.scss']
})
export class CreateProgramComponent implements OnInit {

  imageInput: any;
  levels = new FormArray([]);
  programForm: FormGroup = new FormGroup({
    languages: new FormControl('english', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    level: new FormArray([]),
    //level: new FormControl('', [Validators.required]),
    //level: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    video: new FormControl('', [Validators.required])
  })
  constructor(
    private fb: FormBuilder, 
    private programService: ProgramService,
    private uploadMedia: UploadMediaService) { }

  ngOnInit(): void {
    //this.programService.getPrograms()

    //this.programForm = this.fb.group({
    //  languages: new FormControl('english', [Validators.required]),
    //  title: new FormControl('', [Validators.required]),
    //  levels: new FormControl(['beginner', 'advance'], [Validators.required]),
    //  types: new FormControl(['foundation'], [Validators.required]),
    //  description: new FormControl('', [Validators.required]),
    //  image: new FormControl('', [Validators.required]),
    //  video: new FormControl('', [Validators.required])
    //})

  }

  submit(e: any) {
    //e.preventDefault();


  
    //const title = this.programForm.controls['title'].value || 'test'
    //const description = this.programForm.controls['title'].value || 'test'
    
    //const formData = new FormData()
    //formData.append('title', title)
    //formData.append('description', description)
    

    this.programService.create({
      title: "test",
      description: "test",
      level: ['Beginner'],
      type: ['Foundation'],
    })
    //this.programService.create(formData)
  }

  onImageChange(e: Event) {

    this.uploadMedia.uploadProgramImage((e.target as any).files[0])


    
  }

  handleImage() {
    
    (document.getElementById('imageInput') as any).click()
  }

}
