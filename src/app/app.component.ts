import { Component, ElementRef, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('receivedVideo') receivedVideo!: ElementRef<HTMLVideoElement>;
  private mediaSource!: MediaSource;
  private sourceBuffer!: SourceBuffer;
  private targetClientId = 'mOAF7qq7G9tShXxWAAAJ'; // Replace with the desired client ID
  dataVariable: any;
  id: any;

  constructor() {
  }

  // ngOnInit() {
  //   this.mediaSource = new MediaSource();
  //   this.receivedVideo.nativeElement.src = URL.createObjectURL(this.mediaSource);

  //   this.mediaSource.addEventListener('sourceopen', () => {
  //     this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="vp8"');

  //     this.socket.on('stream-data', (clientId: string, chunk: ArrayBuffer) => {
  //       // Check if the stream data is for the desired client ID
  //       if (clientId === this.targetClientId) {
  //         this.sourceBuffer.appendBuffer(chunk);
  //       }
  //     });
  //   });

  //   this.socket.on('disconnect', () => {
  //     this.mediaSource.endOfStream();
  //   });
  // }
  ngOnInit() {
    const socket = io('http://localhost:3080'); // Replace with your Socket.io server URL

    socket.on('vtr1kWvXMbzqVQ-EAAAJ', (data: any, id: string) => {
      // 'dataUpdate' is the event name emitted by the server
      // 'data' is the received data from the server
      console.log('Received data:', data);
      // Update your Angular component's properties with the received data
      this.dataVariable = data;
      this.id = id
    });
  }
}
