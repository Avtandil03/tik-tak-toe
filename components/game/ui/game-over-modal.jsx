import { UIModal, UiButton } from '../../ui';

export function GameOverModal({ winnerName, playersList }) {
  return (
    <UIModal
      width="md"
      isOpen={!!winnerName}
      onClose={() => console.log('close')}
    >
      <UIModal.Header>Игра завершена</UIModal.Header>
      <UIModal.Body>
        <div className="text-sm mt-4 mb-2 text-black">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className='items-center grid grid-cols-2 gap-3' >
          {playersList}
        </div>
      </UIModal.Body>
      <UIModal.Footer>
        <UiButton variant="overlay" size="md">
          Вернуться
        </UiButton>
        <UiButton variant="primary" size="md">
          Играть снова
        </UiButton>
      </UIModal.Footer>
    </UIModal>
  );
}
