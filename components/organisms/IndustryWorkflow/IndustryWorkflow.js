import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import {
  CaptureListMock,
  ChatMock,
  ScoreCardMock,
  AssignmentMock,
  ShareMock,
  ScheduleMock,
  TimelineMock,
  RequirementCategoriesMock,
  DocumentChecklistMock,
  PipelineTrackerMock,
  AutoSendMock,
  DaySlotsMock,
  AdmissionFunnelMock,
  EnrollmentProgressMock,
} from '../WorkflowMocks/WorkflowMocks';
import styles from './IndustryWorkflow.module.css';

const MOCKS = {
  captureList: CaptureListMock,
  chat: ChatMock,
  scoreCard: ScoreCardMock,
  assignment: AssignmentMock,
  share: ShareMock,
  schedule: ScheduleMock,
  timeline: TimelineMock,
  requirementCategories: RequirementCategoriesMock,
  documentChecklist: DocumentChecklistMock,
  pipelineTracker: PipelineTrackerMock,
  autoSend: AutoSendMock,
  daySlots: DaySlotsMock,
  admissionFunnel: AdmissionFunnelMock,
  enrollmentProgress: EnrollmentProgressMock,
};

/**
 * Vertical alternating timeline (odd steps: text left / mock right, even steps: mock left /
 * text right) used by every industry page's "workflow" section. Each step supplies its own
 * bespoke mock via `mock: { type, props }`, matched against the generic components in
 * WorkflowMocks.js — new industry pages plug in new mock props, no new layout code.
 *
 * A step can set `fullWidth: true` (e.g. Finance's product-requirements step) to render as a
 * single centered column instead of the usual text/mock split — the alternation for steps
 * before and after it is unaffected, since it still occupies one row in the sequence.
 */
export default function IndustryWorkflow({ eyebrow, heading, steps }) {
  return (
    <section id="workflow" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.headingWrap}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => {
            const textLeft = i % 2 === 0;
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;
            const Mock = MOCKS[step.mock.type];
            const lineStyle = { top: isFirst ? '50%' : 0, bottom: isLast ? '50%' : 0 };

            if (step.fullWidth) {
              return (
                <div key={step.n} className={styles.stepFull}>
                  <div className={styles.fullCenterCol}>
                    <span className={styles.centerLine} style={lineStyle} />
                    <span className={styles.centerCircle}>{String(step.n).padStart(2, '0')}</span>
                  </div>
                  <div className={styles.fullTextBlock}>
                    <div className={styles.stepEyebrow}>STEP {String(step.n).padStart(2, '0')}</div>
                    <div className={styles.stepTitle}>{step.title}</div>
                    {step.paragraphs.map((p) => (
                      <p key={p} className={styles.stepPara}>
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className={styles.fullContent}>
                    <Mock {...step.mock.props} />
                  </div>
                </div>
              );
            }

            const textBlock = (
              <div className={textLeft ? styles.textColRight : styles.textCol}>
                <div className={styles.stepEyebrow}>STEP {String(step.n).padStart(2, '0')}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                {step.paragraphs.map((p) => (
                  <p key={p} className={styles.stepPara}>
                    {p}
                  </p>
                ))}
                {step.checklist && (
                  <div className={textLeft ? styles.checklistGridReverse : styles.checklistGrid}>
                    {step.checklist.map((li) => (
                      <div key={li} className={textLeft ? styles.checklistItemReverse : styles.checklistItem}>
                        <Icon name="check_circle" size={16} color="var(--color-primary)" className={styles.checklistIcon} />
                        {li}
                      </div>
                    ))}
                  </div>
                )}
                {step.footNotes &&
                  step.footNotes.map((note) => (
                    <p
                      key={note.text}
                      className={textLeft ? styles.stepFootNoteRight : styles.stepFootNote}
                      style={note.italic ? { fontStyle: 'italic', color: 'var(--color-text-faint)' } : undefined}
                    >
                      {note.text}
                    </p>
                  ))}
              </div>
            );

            const mockBlock = (
              <div className={textLeft ? styles.mockCol : styles.mockColLeft}>
                <Mock {...step.mock.props} />
              </div>
            );

            const centerCol = (
              <div className={styles.centerCol}>
                <span className={styles.centerLine} style={lineStyle} />
                <span className={styles.centerCircle}>{String(step.n).padStart(2, '0')}</span>
              </div>
            );

            return (
              <div key={step.n} className={styles.step}>
                {textLeft ? textBlock : mockBlock}
                {centerCol}
                {textLeft ? mockBlock : textBlock}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
