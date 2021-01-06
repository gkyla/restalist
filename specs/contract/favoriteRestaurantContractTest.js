/* eslint-disable */

const itBehaveLikeRestalistFavorite = (favoriteRestaurant) => {
    it('should not add restaurant if it does not have an id ', async () => {
        favoriteRestaurant.putRestaurant({});

        expect(await favoriteRestaurant.getAllRestaurant()).toEqual([]);
    })

    it('can return all of the Restaurant that have been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 1 },
                { id: 2 },
            ]);
    });

    it('should return the Restaurant that has been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });

        expect(await favoriteRestaurant.getRestaurant(1))
            .toEqual({ id: 1 });
        expect(await favoriteRestaurant.getRestaurant(2))
            .toEqual({ id: 2 });
        expect(await favoriteRestaurant.getRestaurant(3))
            .toEqual({ id: 3 });
        expect(await favoriteRestaurant.getRestaurant(4))
            .toEqual(undefined);
    });

    it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
        favoriteRestaurant.putRestaurant({ aProperty: 'property' });

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([]);
    });

    it('should remove favorite Restaurant', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });

        await favoriteRestaurant.deleteRestaurant(1);

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 2 },
                { id: 3 },
            ]);
    });

    it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 1 });
        favoriteRestaurant.putRestaurant({ id: 2 });
        favoriteRestaurant.putRestaurant({ id: 3 });

        await favoriteRestaurant.deleteRestaurant(4);

        expect(await favoriteRestaurant.getAllRestaurant())
            .toEqual([
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]);
    });
};

export { itBehaveLikeRestalistFavorite };
