import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  describe('El usuario elige piedra', () => {
    it('llamá a `jugadaCon()`', () => {
      const jugadaConMock = jest.fn();
      
      const wrapper = shallowMount(Home, {
        methods: {
          jugadaCon: makeChoiceMock,
        },
      });
      
      wrapper.find('#btn-piedra').trigger('click');
      expect(makeChoiceMock.mock.calls.length).toBe(1);
    });
  });
});