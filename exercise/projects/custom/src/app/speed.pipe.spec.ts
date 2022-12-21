import { SpeedPipe } from './src/app/speed.pipe.ts';

describe('SpeedPipe', () => {
  it('create an instance', () => {
    const pipe = new SpeedPipe();
    expect(pipe).toBeTruthy();
  });
});
