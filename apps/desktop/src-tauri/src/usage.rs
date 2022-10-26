use perf_monitor::cpu::{ThreadStat, ProcessStat, processor_numbers};

 // cpu
pub (crate) fn cpu_usage(condition: bool) {
    // check the core count and thread usage
    let core_num = processor_numbers().unwrap();
    let mut stat_p = ProcessStat::cur().unwrap();
    let mut stat_t = ThreadStat::cur().unwrap();

    let _ = (0..1_000).into_iter().sum::<i128>();

    let usage_p = stat_p.cpu().unwrap() * 100f64;
    let usage_t = stat_t.cpu().unwrap() * 100f64;

    if condition {
        println!("[CPU] core Number: {}, process usage: {:.2}%, current thread usage: {:.2}%", core_num, usage_p, usage_t);
    }
}