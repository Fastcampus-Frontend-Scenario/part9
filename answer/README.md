# Part.9) 개발 생산성을 확보하는 의존성을 배제한 FE개발

# 목적

의존성을 배제하는 프로덕트 구현

MSW를 활용한 Failover component 구현

DI를 활용한 컴포넌트 재사용로직 구현

# 요구사항

Products를 받아오는 API 를 활용한 /products page 구현

- parameter에 따라 FoodProduct list 혹은 GroceryProduct를 rendering
- 해당 동작을 테스트 해 볼 수 있도록 MSW 를 이용

/products 페이지를 확장해서 FoodProduct와 GroceryProduct를 렌더링 하도록 분기

- `/products-new` route 로 구현
- DI를 이용해서 Products component를 재사용

## API

### `/api/products`

- 제품 목록을 받아오는 API
- query값에 따라 FoodProduct / GroceryProduct를 받아오게 됩니다
- query가 없다면 기본으로 food product를 표시
- API
  - url: `/products`
  - Query param:
    - key: `type`
    - value: `'food' | 'grocery'`
  - Usages

        ```
        fetch('/api/products?type=food')
        fetch('/api/products?type=grocery')
        ```

  - response:

        ```
        {
         result: 'OK' | 'ERROR'
         message?: string // error 시 error message
         data?: {
          items: Array<FoodProduct> | Array<GroceryProduct>
         }
        }
        ```

  - Sample response

        ```
        // 성공 시
        {
         result: 'OK',
         data: {
          items: [
            {
              id: 10,
              title: "Cake",
              price: 59.95,
              description: "Mint choco cake",
              image: "/images/cake.webp",
              rating: {
                  rate: 1.5,
                  count: 5
              },
              expDate: "2023-12-25"
            },
          ],
         }
        }
        
        // 실패 시
        {
          result: 'ERROR',
          message: '서버가 응답하지 않습니다. 잠시후 다시 시도해 주세요'
        }
        ```

## Types

```
export interface Product {
    id: number
    title: string
    price: number
    description: string
    image: string
    rating: ProductRating
}

export type FoodProduct = Product & {
    expDate: string
}

export type GroceryProduct = Product & {
    category: string
}

```
