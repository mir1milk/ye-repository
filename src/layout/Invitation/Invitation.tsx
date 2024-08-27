import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <RoundButton
        target="_blank"
        href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXZvdWhybml0OGJyN2ZocmNjcWZyanVzbWQgODkwNzAxOGIwOTBkNDMwYjQ4ZDBjMjkwZGJmNDUxNTA1MDZhMDc5YjlkODVjZDI5MmVlMmY2OGJiNDQwODUyZEBn&tmsrc=8907018b090d430b48d0c290dbf45150506a079b9d85cd292ee2f68bb440852d%40group.calendar.google.com"
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
