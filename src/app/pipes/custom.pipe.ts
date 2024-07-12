import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(text: string, limit: number): string {
    if (!text) return '';
    if (text.length <= limit) return text;
    var truncatedText = text.substring(0, limit);
    return truncatedText.concat('...');
}

}
