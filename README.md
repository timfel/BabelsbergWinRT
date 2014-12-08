## Demo of identity constraints

This applications is a stand-in for a more complex app that might benefit from identity constraints.
Imagine a system where different tasks are worked on. The tasks are divided into subtasks which progress independently, but always
simultaneously (maybe they need to continously exchange information?).

The user gets a visual indication of these tasks, and can prioritize tasks by selecting the currently active task in the UI.
The currently selected task is always the one that progresses.

At the same time, the workers on each subtask can get "stuck" (e.g. waiting for network or something like that). In that case
the active task should change, because the workers want to progress simultanously. Also, the UI should reflect that the system
decided to work on another task for now.

A task is a complex domain object with subtasks and such. All workers and UI should always refer to the same task at any point
in time, so the progress is always visible, and workers always work on the same thing (one could argue that e.g. in a system
having workers on the same task memory is more efficient than spreading them out...). Thus, we need some way to ensure that all
workers' (and the UI's) reference the *same* (not an *equal*) task. We use identity constraints for this, and thus get around
setting up some announcements/broadcasting/observer pattern to make sure task switches occur simultaneously.