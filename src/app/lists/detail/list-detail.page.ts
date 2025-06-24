import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { ItemFormComponent } from '../components/item-form/item-form.component';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { CategoryFilterComponent } from '../components/category-filter/category-filter.component';
import { SuggestionPanelComponent } from '../components/suggestion-panel/suggestion-panel.component';
import { CategoryService } from '../services/category.service';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.page.html',
  styleUrl: './list-detail.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ItemFormComponent,
    ItemListComponent,
    CategoryFilterComponent,
    SuggestionPanelComponent,
  ]
})
export class ListDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly itemService = inject(ItemService);
  private readonly categoryService = inject(CategoryService);
  private readonly suggestionService = inject(SuggestionService);

  readonly items = this.itemService.items;
  readonly categories = this.categoryService.categories;
  readonly suggestions = this.suggestionService.suggestions;

  readonly listId = this.route.snapshot.paramMap.get('id') ?? '';
  readonly listItems = computed(() => this.items()[this.listId] || []);

  addItem(name: string): void {
    this.itemService.addItem(this.listId, name);
    this.suggestionService.refresh();
  }
}
