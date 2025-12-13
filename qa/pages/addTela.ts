// qa/pages/addTela.ts
import { Page, Locator, expect } from '@playwright/test';
import path from 'path';

export interface DatosTela {
    material: string;
    anchoRollo: string;
    weight: string;
    colors: string;
    supplier: string;
    totalPrice: string;
    imagenPath?: string;
}

export class AddTelaPage {
    readonly page: Page;
    readonly material: Locator;
    readonly anchoRollo: Locator;
    readonly weight: Locator;
    readonly colors: Locator;
    readonly supplier: Locator;
    readonly totalPrice: Locator;
    readonly inputFile: Locator;
    readonly guardar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.material = page.getByPlaceholder('Algodón Premium');
        this.anchoRollo = page.getByPlaceholder('1.70');
        this.weight = page.getByPlaceholder('500');
        this.colors = page.getByPlaceholder('Rojo, Azul, Negro');
        this.supplier = page.getByPlaceholder('Textil S.A.');
        this.totalPrice = page.getByPlaceholder('350.5');

        // Input donde se carga la imagen
        this.inputFile = page.locator('input[type="file"]');

        this.guardar = page.getByRole('button', { name: 'Guardar' });
    }

    async assertOnPage() {
        await expect(this.material).toBeVisible();
        await expect(this.anchoRollo).toBeVisible();
    }

    async subirImagen(imagenPath?: string) {
        const fixturesDir = path.resolve(__dirname, '..', 'fixtures');

        const filename = imagenPath ? path.basename(imagenPath) : 'konfex.png';

        const finalPath = path.resolve(fixturesDir, filename);

        console.log('📌 Cargando archivo desde:', finalPath);

        await this.inputFile.setInputFiles(finalPath);
    }

    async completarFormulario(datos: DatosTela) {
        await this.material.fill(datos.material);
        await this.anchoRollo.fill(datos.anchoRollo);
        await this.weight.fill(datos.weight);
        await this.colors.fill(datos.colors);
        await this.supplier.fill(datos.supplier);
        await this.totalPrice.fill(datos.totalPrice);
    }

    async crearTela(datos: DatosTela) {
        await this.assertOnPage();
        await this.subirImagen(datos.imagenPath);
        await this.completarFormulario(datos);
        await this.guardar.click();
    }
}
